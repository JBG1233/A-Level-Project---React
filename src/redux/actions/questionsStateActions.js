export const UpdateQuestionState = (questions, groupId) => ({type: 'questionStateChange', questions: questions, groupId: groupId})

export const SearchResultsChange = (searchResults) => ({searchResults: searchResults, type: 'SearchResultsChange'})