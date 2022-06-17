import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createSession } from "./SessionManager.js";
import { getTutors } from "../tutor/TutorManager.js";
import { getLanguages } from "./SessionManager.js";


export const SessionForm = () => {
    const history = useHistory()
    const [tutors, setTutors] = useState([]);
    const [languages, setLanguages] = useState([])

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */

    const [newSession, setNewSession] = useState({
        tutor_id: "",
        date: "",
        skill_level: 0,
        time: "",
        language: ""
    });

    useEffect(() => {
        getTutors().then((data) => setTutors(data));
    }, []);

    useEffect(() => {
        getLanguages().then(data => setLanguages(data))
    }, [])

    const changeSessionState = (domEvent) => {
        const newSessionObject = Object.assign({}, newSession);
        newSessionObject[domEvent.target.name] = domEvent.target.value;
        setNewSession(newSessionObject);
    };
    
    return (
        <form className="sessionForm">
          <h2 className="sessionForm__title">Create New Session</h2>
          <fieldset>
            <div className="form-group">
              <label htmlFor="date">Date: </label>
              <input
                type="text"
                name="date"
                required
                autoFocus
                className="form-control"
                value={newSession.date}
                onChange={changeSessionState}
              />
            </div>
          </fieldset>
    
          <fieldset>
            <div className="form-group">
              <label htmlFor="skill_level">Skill Level: </label>
              <input
                type="text"
                name="skill_level"
                required
                className="form-control"
                value={newSession.skill_level}
                onChange={changeSessionState}
              />
            </div>
          </fieldset>
    
          <fieldset>
            <div className="form-group">
              <label htmlFor="time">Time: </label>
              <input
                type="text"
                name="time"
                required
                className="form-control"
                value={newSession.time}
                onChange={changeSessionState}
              />
            </div>
          </fieldset>
    
          <fieldset>
            <div className="form-group">
              <select
                name="tutor_id"
                required
                className="form-control"
                value={newSession.tutor_id}
                placeholder="Select A Tutor..."
                onChange={changeSessionState}
              >
                <option value="0">Choose a Tutor</option>
                {tutors.map((tutor, index) => {
                  return (
                    <option key={index} value={tutor.id} name="tutor_id">
                      {tutor.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </fieldset>

          <fieldset>
            <div className="form-group">
              <select
                name="language"
                required
                className="form-control"
                value={newSession.language}
                placeholder="Select A Language..."
                onChange={changeSessionState}
              >
                <option value="0">Choose a Language</option>
                {languages.map((language, index) => {
                  return (
                    <option key={index} value={language.id} name="language_id">
                      {language.language}
                    </option>
                  );
                })}
              </select>
            </div>
          </fieldset>
    
          <button
            type="submit"
            onClick={(evt) => {
              // Prevent form from being submitted
              evt.preventDefault();
    
              const session = {
                tutor: parseInt(newSession.tutor_id),
                date: newSession.date,
                skill_level: newSession.skill_level,
                time: newSession.time,
                language: newSession.language
              };
    
              // Send POST request to your API
              createSession(session).then(() => history.push("/sessions"));
            }}
            className="btn btn-primary"
          >
            Create
          </button>
        </form>
      );
    };


