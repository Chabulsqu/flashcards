import { Link, useHistory } from "react-router-dom";
import { selectTopics, deleteTopic } from "./topicsSlice";
import ROUTES from "../../app/routes";
import { useDispatch, useSelector } from "react-redux";
import removeIcon from '../../data/icons/trash.svg'

export default function Topics() {
  const topics = useSelector(selectTopics);
  const dispatch = useDispatch();
  const history = useHistory()

  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {topics &&
          Object.values(topics).map((topic) => (
            <li className="topic" key={topic.id}>
              <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
                <div className="topic-container">
                  <img src={topic.icon} alt="" />
                  <div className="text-content">
                    <h2>{topic.name}</h2>
                    <p>{topic.quizIds.length} Quizzes</p>
                  </div>
                </div>
              </Link>
              <img src={removeIcon}  alt="Delete this topic" className="delete-topic" onClick={() =>  
                      dispatch(deleteTopic({id: topic.id}))}/>
            </li>
          ))}
      </ul>

      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}
