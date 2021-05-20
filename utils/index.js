/* check prop types function: https://youtu.be/JQD-ApooNMI?list=PL-Db3tEF6pB8Am-IhCRgyGSxTalkDpUV_&t=1061 */


export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper
};