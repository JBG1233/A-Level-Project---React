export const UpdateQuestionState = (questions) => ({type: 'questionStateChange', questions: questions})

export const SearchResultsChange = (searchResults) => ({searchResults: searchResults, type: 'SearchResultsChange'})