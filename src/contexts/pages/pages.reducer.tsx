export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_PAGES':
      return { ...state, pages: action.payload };
    default:
      console.log('step: error' + action.type);
      throw new Error(`Unknown action: ${action.type}`);
  }
};
