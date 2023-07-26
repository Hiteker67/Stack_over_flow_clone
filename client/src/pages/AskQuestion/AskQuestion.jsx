import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './AskQuestion.css'
import { askQuestion } from '../../actions/question'

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState('')
  const [questionBody, setQuestionBody] = useState('')
  const [questionTags, setQuestionTags] = useState('')

  const dispatch = useDispatch()
  // const User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate()
  const User = useSelector((state) => state.currentUserReducer);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted: User.result.name, userId: User?.result?._id }, navigate))
  }

  const handleEnter = (e) => {
    if(e.key=== 'Enter'){
        setQuestionBody(questionBody + "\n")
    }
  } 

   return (
          <div className="ask-question">
              <div className="ask-ques-container">
                <h1>Ask a Public Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className="ask-form-container">
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                            <p>Be specific and imagine you're asking a question to another person.</p>
                            <input type="text" name="questionTitle" id="ask-ques-title" onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder="e.g. Is there an R function for finding the index of an element in a vector?"/>
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h4>Body</h4>
                            <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                            <textarea name="" id="ask-ques-body" onChange={(e) => {setQuestionBody(e.target.value)}} cols="30" rows="10" onKeyUp = {handleEnter} ></textarea>
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h4>Tags</h4>
                            <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                            <input type="text" id="ask-ques-tags" onChange={(e) => {setQuestionTags(e.target.value.split(" "))}} placeholder="e.g. (wpf mysql ruby-on-rails)"/>
                        </label>
                    </div>
                    <input type="submit" value='Review your question' className='review-btn'/> 
                </form>
              </div>
          </div>
  )
}

export default AskQuestion