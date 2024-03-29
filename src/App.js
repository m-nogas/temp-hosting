import 'bootstrap/dist/css/bootstrap.min.css';
import './CandorClasses.css';
import './BootstrapCustomizations.css';
import { Container, Col, Row } from 'react-bootstrap';
import DialogueCarousel from './components/PostCarousel';
import DialogueInfoCard from './components/DialogueInfoCard';
import DownloadPrompt from './components/DownloadPrompt';
import { useSelector, useDispatch } from 'react-redux';
import { getDialogue, getPosts } from './actions';

// Column layout constants
const colXs = 12;
const colMd = 4;

function App() {
  const dialogueMetaData = useSelector(state => state.dialogueMetaData);
  const postsList = useSelector(state => state.posts);
  const dispatch = useDispatch();

  // TODO: this is bad, we should use proper routing. 
  const dialogueID = getDialogueIDFromURL(window.location.href);
  if (dialogueID) {
    dispatch(getDialogue(dialogueID));
    dispatch(getPosts(dialogueID));
  }
  return (
    <div className="App">
      <Container fluid className="candor-container">
        <Row className="candor-row" >
          <Col xs={colXs} md={colMd} className="candor-col-height">
           <DialogueInfoCard dialogueMetaData={dialogueMetaData}/>
          </Col>
          <Col xs={colXs} md={colMd} className="candor-col-height">
            <DialogueCarousel postsList={postsList} />
          </Col>
          <Col xs={colXs} md={colMd} className="text-center d-flex align-items-end candor-col-height pb-5">
            <DownloadPrompt />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function getDialogueIDFromURL(urlString) {
  return urlString.split("/").slice(-1)[0];
}

export default App;
