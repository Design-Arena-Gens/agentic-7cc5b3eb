'use client';

import { useState } from 'react';

export default function Home() {
  const [truefalseQuestions, setTruefalseQuestions] = useState(9);
  const [multipleChoiceQuestions, setMultipleChoiceQuestions] = useState(5);
  const [choicesPerQuestion, setChoicesPerQuestion] = useState(4);

  const calculateTrueFalse = (questions) => {
    return Math.pow(2, questions);
  };

  const calculateMultipleChoiceTotal = (questions, choices) => {
    return Math.pow(choices, questions);
  };

  const calculateMultipleChoiceAllWrong = (questions, choices) => {
    return Math.pow(choices - 1, questions);
  };

  const trueFalseResult = calculateTrueFalse(truefalseQuestions);
  const mcTotalResult = calculateMultipleChoiceTotal(multipleChoiceQuestions, choicesPerQuestion);
  const mcAllWrongResult = calculateMultipleChoiceAllWrong(multipleChoiceQuestions, choicesPerQuestion);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '3rem',
          marginBottom: '50px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Combinatorics Problem Solver
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {/* True-False Test Card */}
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <h2 style={{
              color: '#667eea',
              marginBottom: '20px',
              fontSize: '1.8rem'
            }}>
              True-False Test
            </h2>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '10px',
                fontSize: '1.1rem',
                color: '#333'
              }}>
                Number of Questions:
              </label>
              <input
                type="number"
                value={truefalseQuestions}
                onChange={(e) => setTruefalseQuestions(Number(e.target.value))}
                min="1"
                max="20"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '1.1rem',
                  border: '2px solid #667eea',
                  borderRadius: '10px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: '25px',
              borderRadius: '15px',
              color: 'white'
            }}>
              <h3 style={{ marginTop: 0, fontSize: '1.3rem' }}>Solution:</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                Each question has <strong>2 choices</strong> (True or False)
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                Formula: 2<sup>{truefalseQuestions}</sup>
              </p>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '20px',
                borderRadius: '10px',
                marginTop: '15px'
              }}>
                <p style={{ margin: 0, fontSize: '1.2rem' }}>Total Ways:</p>
                <p style={{
                  fontSize: '3rem',
                  margin: '10px 0 0 0',
                  fontWeight: 'bold'
                }}>
                  {trueFalseResult.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Multiple Choice Test Card */}
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <h2 style={{
              color: '#764ba2',
              marginBottom: '20px',
              fontSize: '1.8rem'
            }}>
              Multiple Choice Test
            </h2>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '10px',
                fontSize: '1.1rem',
                color: '#333'
              }}>
                Number of Questions:
              </label>
              <input
                type="number"
                value={multipleChoiceQuestions}
                onChange={(e) => setMultipleChoiceQuestions(Number(e.target.value))}
                min="1"
                max="20"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '1.1rem',
                  border: '2px solid #764ba2',
                  borderRadius: '10px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '10px',
                fontSize: '1.1rem',
                color: '#333'
              }}>
                Choices per Question:
              </label>
              <input
                type="number"
                value={choicesPerQuestion}
                onChange={(e) => setChoicesPerQuestion(Number(e.target.value))}
                min="2"
                max="10"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '1.1rem',
                  border: '2px solid #764ba2',
                  borderRadius: '10px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
              padding: '25px',
              borderRadius: '15px',
              color: 'white',
              marginBottom: '20px'
            }}>
              <h3 style={{ marginTop: 0, fontSize: '1.3rem' }}>a) All Possible Ways:</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                Each question has <strong>{choicesPerQuestion} choices</strong>
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                Formula: {choicesPerQuestion}<sup>{multipleChoiceQuestions}</sup>
              </p>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '20px',
                borderRadius: '10px',
                marginTop: '15px'
              }}>
                <p style={{ margin: 0, fontSize: '1.2rem' }}>Total Ways:</p>
                <p style={{
                  fontSize: '3rem',
                  margin: '10px 0 0 0',
                  fontWeight: 'bold'
                }}>
                  {mcTotalResult.toLocaleString()}
                </p>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              padding: '25px',
              borderRadius: '15px',
              color: 'white'
            }}>
              <h3 style={{ marginTop: 0, fontSize: '1.3rem' }}>b) All Answers Wrong:</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                Each question has <strong>{choicesPerQuestion - 1} wrong choices</strong>
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                Formula: {choicesPerQuestion - 1}<sup>{multipleChoiceQuestions}</sup>
              </p>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '20px',
                borderRadius: '10px',
                marginTop: '15px'
              }}>
                <p style={{ margin: 0, fontSize: '1.2rem' }}>Ways to Get All Wrong:</p>
                <p style={{
                  fontSize: '3rem',
                  margin: '10px 0 0 0',
                  fontWeight: 'bold'
                }}>
                  {mcAllWrongResult.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Answer Summary */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '40px',
          marginTop: '40px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{
            color: '#667eea',
            marginBottom: '30px',
            fontSize: '2rem',
            textAlign: 'center'
          }}>
            📊 Summary of Answers
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            <div style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '10px',
              borderLeft: '5px solid #667eea'
            }}>
              <h3 style={{ color: '#667eea', marginTop: 0 }}>True-False Test ({truefalseQuestions} questions)</h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', margin: '10px 0' }}>
                {trueFalseResult.toLocaleString()}
              </p>
              <p style={{ color: '#666', margin: 0 }}>different ways</p>
            </div>

            <div style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '10px',
              borderLeft: '5px solid #764ba2'
            }}>
              <h3 style={{ color: '#764ba2', marginTop: 0 }}>Multiple Choice - All Ways</h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', margin: '10px 0' }}>
                {mcTotalResult.toLocaleString()}
              </p>
              <p style={{ color: '#666', margin: 0 }}>different ways</p>
            </div>

            <div style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '10px',
              borderLeft: '5px solid #f5576c'
            }}>
              <h3 style={{ color: '#f5576c', marginTop: 0 }}>Multiple Choice - All Wrong</h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', margin: '10px 0' }}>
                {mcAllWrongResult.toLocaleString()}
              </p>
              <p style={{ color: '#666', margin: 0 }}>different ways</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
