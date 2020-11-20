import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {QuestionManagerTrue, UpdateQuestionState} from "../redux/actions";

class SearchResults extends React.Component {

    showSearchResults (searchResult) {
        return (
            <div onClick={()=>this.getQuestions(searchResult)}>
                <div className="searchResult">
                    <img src={searchResult.quizImage} alt=""/>
                    <header>{searchResult.quizName}</header>
                    <p>{searchResult.quizDescription}</p>
                </div>
            <br/>
            </div>

        )
    }

    getQuestions(selectedSearchResult) {
        axios({
            method: 'GET',
            url: this.props.apiHost + '/rest/questions/main/' + selectedSearchResult.groupId,
        })
            .then(response => {
                if (response.status === 200) {
                    this.props.UpdateQuestionState(response.data, selectedSearchResult.groupId)
                    this.props.QuestionManagerTrue()
                }
            }).catch(error => {
        })
    }


    render() {
        return (
            <div>
                {this.props.searchResults !== undefined ? <div className="searchPadding">
                    {
                        this.props.searchResults.map((searchResult) => {
                            return this.showSearchResults(searchResult)
                        })
                    }
                </div> : <div className="whiteTextHeader">No Quizzes Found!</div>
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

const mapDispatchToProps = {QuestionManagerTrue, UpdateQuestionState};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);