export type checkboxGroupExtraInfo = {
  title: string,
  description: string,
};

export type checkboxGroupItemsType = {
  label?: string,
  description?: string,
  id?: string;
  value: any,
  extraInfo?: checkboxGroupExtraInfo[],
};
