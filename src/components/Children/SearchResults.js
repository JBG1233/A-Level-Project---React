import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import '../Css/Questions.css';

class SearchResults extends React.Component {

    showSearchResults (searchResult) {
        return (
            <div onClick={()=> this.getQuestions(searchResult)}>
                <div className="searchResult">
                    <img className="searchImage" src={searchResult.quizImage} alt=""/>
                    <div>
                        <header>{searchResult.quizName}</header>
                        <p>{searchResult.quizDescription}</p>
                        <br/>
                        <header>Author:</header>
                        <p>{searchResult.authorName}</p>
                    </div>
                </div>
            <br/>
            </div>
        )
    }

    getQuestions(selectedSearchResult) {
        this.props.history.replace(`/quiz/${selectedSearchResult.groupId}`)
    }


    render() {
        return (
            <div>
                {this.props.searchResults[0] !== undefined ? <div className="searchPadding">
                    {
                        this.props.searchResults.map((searchResult) => {
                            return this.showSearchResults(searchResult)
                        })
                    }
                </div> : <div className="noQuizzes"> No Quizzes Found!</div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchResults: state.questionsState.searchResults,
        apiHost: state.serverDetails.apiHost
    }
}

const mapDispatchToProps = {};

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter) (SearchResults);