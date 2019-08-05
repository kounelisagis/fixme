import { stringify } from 'querystring';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import scrollIntoView from 'scroll-into-view-if-needed';
import smoothScrollIntoView from 'smooth-scroll-into-view-if-needed';

import { hosters, lvlOfDifficulty, technologies } from '../../../helpers/consts';
import { IRootState } from '../../../store/reducers';
import { countIssues } from '../../Issues/modules/issuesReducer';
import { updateTechnology, updateExperience, updateHoster } from '../modules/homeReducer';
import { customStyles } from './customStyles';

interface ITellUsAboutYou {
  readonly updateTechnology: (language: string) => any;
  readonly updateExperience: (experience?: string) => any;
  readonly updateHoster: (hoster?: string) => any;
  readonly countIssues: (args: any) => any;
  readonly technology: string;
  readonly experienceNeeded: string;
  readonly hoster: string;
  readonly issuesLength: number;
  readonly home: any;
  readonly focus: boolean;
}

const scrollIntoViewSmoothly =
  document.documentElement && "scrollBehavior" in document.documentElement.style
    ? scrollIntoView
    : smoothScrollIntoView;

const getResults = (length: number, params: any) => (
  <React.Fragment>
    <h6 className="home-about-you-title mt-5">
      {length > 0
        ? "BECAUSE WE HAVE JUST FOR YOU"
        : " WE COULDN'T FIND ANY ISSUES BUT YOU CAN"}
    </h6>
    <Link
      to={`/issues?${length > 0 ? stringify(params) : ""}`}
      className="btn home-about-you-btn d-inline-flex"
    >
      <span className="p-1">
        {length === 0
          ? "Browse All Issues"
          : length === 1
            ? "1 issue"
            : `${length} issues`}
        <i className="arrow-right" />
      </span>
    </Link>
  </React.Fragment>
);

class TellUsAboutYou extends React.Component<ITellUsAboutYou, {}> {
  public selectRef = React.createRef();
  public componentDidUpdate(prevProps: ITellUsAboutYou): void {
    if (
      prevProps.home !== this.props.home &&
      (this.props.technology || []).length > 0
    ) {
      this.props.countIssues(this.props.home);
    }
    if (prevProps.focus !== this.props.focus) {
      scrollIntoViewSmoothly(
        document.getElementById("language-select") as Element,
        {
          behavior: "smooth",
          inline: "center",
          block: "center"
        } as any
      );
      setTimeout(() => {
        (this.selectRef as any).focus();
      }, 350);
    }
  }


  public handleLanguageChange = (value: { value: string; label: string }) => {
    this.props.updateTechnology(value.value);
    this.props.updateExperience("");
    this.props.updateHoster("");
  };
  public handleLvlChange = (value: { value: string; label: string }) => {
    this.props.updateExperience(value.value);
  };
  public handleTypeChange = (value: { value: string; label: string }) => {
    this.props.updateHoster(value.value);
  };
  public render() {
    const {
      technology,
      experienceNeeded,
      hoster,
      issuesLength,
      home
    } = this.props;

    return (
      <div className="d-flex justify-content-center flex-column">
        <h6 className="home-about-you-title mb-2">
          TELL US A BIT ABOUT YOURSELF
        </h6>
        <div className="home-about-you-magic mt-4 d-flex flex-column">
          <div>
            <p className="h2" id="magicLabel">I do my magic in</p>
            <Select
              ref={(ref: React.RefObject<{}>) => {
                this.selectRef = ref;
              }}
              id="language-select"
              options={technologies}
			        aria-labelledby="magicLabel"
              isMulti={true}
              placeholder="type in your favorite languages"
              defaultValue={
                technology &&
                technologies.filter(tech => technology.includes(tech.value))
              }
              styles={customStyles(false)}
              onChange={this.handleLanguageChange}
            />
          </div>
          <br />
          {(this.props.technology || []).length > 0 && (
            <div>
              <p className="h2">and I’m looking for issues that are</p>
              <div className="d-inline-block">
                <Select
                  options={lvlOfDifficulty}
                  defaultValue={lvlOfDifficulty.find(
                    lvl =>
                      !!experienceNeeded &&
                      experienceNeeded.includes(lvl.value)
                  )}
                  styles={customStyles(true)}
                  onChange={this.handleLvlChange}
                />
                <span className="h2">&</span>
                <Select
                  options={hosters}
                  defaultValue={hosters.find(
                    hstr => !!hoster && hoster.includes(hstr.value)
                  )}
                  styles={customStyles(true)}
                  onChange={this.handleTypeChange}
                />
              </div>
              {getResults(issuesLength, home)}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    technology: state.home.technology,
    hoster: state.home.hoster,
    experienceNeeded: state.home.experienceNeeded,
    issuesLength: state.issues.issuesLength,
    home: state.home
  };
};

const mapDispatchToProps = {
  updateTechnology,
  updateHoster,
  countIssues,
  updateExperience
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TellUsAboutYou);
