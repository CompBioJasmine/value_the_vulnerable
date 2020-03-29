/** @jsx jsx */
import React, { useCallback, useState, useEffect } from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';
import { jsx } from 'theme-ui';
import { Introduction, Layout } from '../components';
import { Questionary } from '../features/questionary/Questionary.container';
import { questions as JSONQuestions } from './questions';

function App() {
  const [surveysAggregationData, setSurveysAggregationData] = useState(null);
  const [questions, setQuestions] = useState(JSONQuestions);
  const [pageName, setPageName] = useState('introduction');

  const handleSurveySubmission = useCallback(submission => {
    /* add logic to handle survey submission here
    /
    / after the server responded with surveys aggregation data, call setSurveysAggregationData with
    / that data as the argument
    /
    / submission object shape is like:
    [
      {
        questionId: 1,
        answer: 'some answer in string if type is string or number if type is number',
        explainMore: 'optional text here',
        type: 'string | number',
        group:1
      },
      {
        questionId: 2,
        answer: 'some answer in string if type is string or number if type is number',
        explainMore: 'optional text here',
        type: 'string | number',
        group:1
      }
    ]
    I wonder if we need to add the question text there too?
    */
  }, []);

  useEffect(() => {
    /**
     * get the questions from the backend here
     * transform it to array of objects of this shape
     * {
     *     question: '',
     *     answerType: '',
     *     answerChoices: [],
     *     explainMoreText: null,
     *     id: 1,
     *     sort: 1,
     *     group: ''
     * }
     * call setQuestions with the object
     */
  });

  const sortedQuestions = questions.sort((a, b) => Number(a.sort) - Number(b.sort));

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {pageName === 'introduction' && <Introduction onNextClicked={setPageName} />}
        {pageName === 'survey' && <Questionary questions={sortedQuestions} onSubmit={handleSurveySubmission} />}
      </Layout>
    </ThemeProvider>
  );
}

export { App };
