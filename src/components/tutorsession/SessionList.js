import React, {useEffect} from "react"
import { useState } from "react/cjs/react.development"
import { useHistory, Link } from "react-router-dom";
import { getSessions, joinSession, leaveSession } from "./SessionManager.js";

export const SessionList = (props) => {
    const [sessions, setSessions] = useState([])

    useEffect(() => {
        getSessions().then(data => setSessions(data))
    }, [])

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
            Leave Event
          </button>
        );
      };


    return (
        <article className="tutors">
            <h2>Upcoming Tutoring Sessions</h2>
            {
                sessions.map(session => {
                    return <section key={`tutor--${session.id}`} className="session">
                        <div className="session__tutor_name">Tutor: {session.tutor.name}</div>
                        <div className="session__parent_child_name">Children Attending: {session.parents[0].child_name}</div>
                        <div className="session__date">Date: {session.date}</div>
                        <div className="session__time">Time: {session.time}</div>
                        <div className="session__ skill_level">Skill Level: {session. skill_level}</div>
                        

        

                    </section>
                })
            }



        </article>
    )

}



