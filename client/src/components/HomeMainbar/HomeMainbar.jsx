import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import QuestionList from './QuestionList'
import { fetchAllQuestions } from '../../actions/question';



import './HomeMainbar.css'
import { useDispatch, useSelector } from 'react-redux'

const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()
  
  const questionsList = useSelector(state => state.questionsReducer)
  const errorMessage = useSelector(state => state.questionsReducer.errorMessage)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions())
  }, [dispatch])
  if (errorMessage) {
    return <h1>{errorMessage}</h1>
  }
  // console.log(questionsList)
  
    //   var questionsList= [{
      //     _id:'1',
      //     upVotes:3,
    //     downVotes:2,
    //     noOfAnswers: 2,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ["java", "node js", "react js","mongo db","express js"],
    //     userPosted: "mano",
    //     userId:1,
    //     askedOn: "jan1",
    //     answer: [{
    //         answerBody:"Answer",
    //         userAnswered:'kumar',
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // },
    // {
    //     _id:'2',
    //     upVotes:3,
    //     downVotes:2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn: "jan1",
    //     userId: 1,
    //     answer: [{
    //       answerBody:"Answer",
    //       userAnswered:'kumar',
    //       answeredOn: "jan 2",
    //       userId: 1,
    //   }]
    // },
    // {
    //     _id:'3',
    //     upVotes:3,
    //     downVotes:2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn: "jan1",
    //     userId: 1,
    //     answer: [{
    //       answerBody:"Answer",
    //       userAnswered:'kumar',
    //       answeredOn: "jan 2",
    //       userId: 2,
    //   }]
    // }]

  

  const checkAuth= () => {
    if(user===null)
    {
      alert("login or signup to ask a question")
      navigate('/Auth')
    } else{
        navigate('/AskQuestion')
    }
  }


  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
           {
               location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
           }
           <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
      {/* {errorMessage ? (
          <h1>{errorMessage}</h1>
        ) : questionsList ? (
          <>
            <p>{questionsList.length} questions</p>
            <QuestionList questionsList={questionsList} />
          </>
        ) : (
          <h1>Loading...</h1>
        )} */}
        {
          questionsList.data ? (
          <>
          <p>{ questionsList.data?.length } questions</p>
          <QuestionList questionsList={questionsList.data} />
          </>
          ) : (
            <h1>Loading...</h1>
          ) 
        }
      </div>
    </div>
  )
}

export default HomeMainbar