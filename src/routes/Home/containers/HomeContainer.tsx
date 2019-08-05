import { connect } from "react-redux";
import { IRootState } from "../../../store/reducers";
import { getProjects } from "../../Projects/modules/projectReducer";
import Home from "../components/Home";
import { updateTechnology, updateExperience, updateHoster} from "../modules/homeReducer";

const mapDispatchToProps = {
  getProjects,
  updateTechnology,
  updateExperience,
  updateHoster
};

const mapStateToProps = (state: IRootState) => ({
  projectLength: state.projects.projectLength
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
