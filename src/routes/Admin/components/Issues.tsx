import React from 'react';
import { Datagrid, List, NumberField, ReferenceField, TextField } from 'react-admin';

import { TagsField } from './Projects';

export const IssueList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="experienceNeeded" />
      <TextField source="expected_time" />
      <TextField source="tech_stack" />
      <TextField source="url" />
      <TextField source="body" />
      <TextField source="type" />
      <NumberField source="number" />
      <TagsField source="labels" label="Labels" />
      <ReferenceField
        label="Project"
        source="project_id"
        reference="admin/projects"
      >
        <TextField source="name" />
      </ReferenceField>
      <TextField source="github_id" />
    </Datagrid>
  </List>
);
