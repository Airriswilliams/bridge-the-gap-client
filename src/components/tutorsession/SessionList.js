import React, {useEffect} from "react"
import { useState } from "react/cjs/react.development"
import { useHistory, Link } from "react-router-dom";
import { getSessions, joinSession, leaveSession, getLanguages, deleteSession } from "./SessionManager.js";
import "./Session.css"

export const SessionList = (props) => {
    const [sessions, setSessions] = useState([])
    const [languages, setLanguages] = useState([])
    const history = useHistory();


    useEffect(() => {
        getSessions().then(data => setSessions(data))
    }, [])

    useEffect(() => {
        getLanguages().then(data => setLanguages(data))
    }, [])

    const deleteHandler = (id) => {
        deleteSession(id)
        .then(getSessions)
        .then((data) => setSessions(data))
    }

    const joinButton = (id) => {
        return (
          <button
            onClick={() =>
              joinSession(id)
                .then(getSessions)
                .then((data) => setSessions(data))
            }
          >
            Join Session
          </button>
        );
      };
    
      const leaveButton = (id) => {
        return (
          <button
            onClick={() =>
              leaveSession(id)
                .then(getSessions)
                .then((data) => setSessions(data))
            }
          >
            Leave Session
          </button>
        );
      };

    return (
        <article className="sessions">
              <header>
        <button
          className="btn btn-2 btn-sep icon-create"
          onClick={() => {
            history.push({ pathname: "/sessions/new" });
          }}
        >
          Create New Session
        </button>
      </header>
            {
                sessions.map(session => {
                  
                    //Session.parent.map(parent=>parent.child_name) =>["Airris", "Michael", "John"]
                    //.join => Airris, Michael, John
                    const childrenList = session?.parents?.map(parent => {
                        return parent.child_name
                    }).join(",");
                    console.log("children list: ", childrenList);
                    return <section key={`tutor--${session.id}`} className="session">
                        <div className="session__tutor_name">Tutor: {session.tutor.name}</div>
                        <div className="session__parent_child_name">Children Attending: {childrenList} </div>
                        <div className="session__date">Date: {session.date}</div>
                        <div className="session__time">Time: {session.time}</div>
                        <div className="session__ skill_level">Skill Level: {session. skill_level}</div>
                        <div className="session_language">Language: {session?.language[0]?.language}</div>
                        {session.joined ? leaveButton(session.id) : joinButton(session.id)}

                        <header>
                    <button onClick={() => deleteHandler(session.id)}>DELETE</button>
                    </header>

        

                    </section>
                })
            }



        </article>
    )

}



