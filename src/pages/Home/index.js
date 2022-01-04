import React, { useEffect, useState } from "react"
import { ApiUtils } from "../../utils/api"
import keyBy from "lodash/keyBy"

import "./Home.css"

function Home() {
  const [questions, setQuestions] = useState({})

  const questionDictionary = keyBy(questions, "id")

  useEffect(() => {
    _handleNewRandomQuestion()
  }, [])

  const _handleNewRandomQuestion = () =>
    ApiUtils.fetchRandomTrivia().then((question) => {
      if (questionDictionary[question.id]) return _handleNewRandomQuestion()
      return setQuestions([...questions, question])
    })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default Home
