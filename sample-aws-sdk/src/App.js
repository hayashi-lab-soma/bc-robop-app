import logo from './logo.svg';
import './App.css';

const AWS = require('aws-sdk')

AWS.config.update({
  accessKeyId: 'AKIAX5MT2NAYODAIUTTV',
  secretAccessKey: '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',
  region: 'ap-northeast-1',
})

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  Bucket: 'bc-robop',
 });

function App() {

  const listMyBuckets = () => {
    s3.listObjects({Bucket: 'bc-robop', Delimiter: '/'}, function (err, data) {
      if (err) {
        console.log(err)
      }
      else {
        console.log(data)
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <button onClick={listMyBuckets}>test</button>
    </div>
  );
}

export default App;
