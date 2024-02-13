import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

const handlerUpperchange = () =>{
    // console.log('UpperCase was Clicked ' + Text);
    let newText = Text.toUpperCase();
    setText(newText);
}

const handlerLowchange = () =>{
  // console.log('UpperCase was Clicked ' + Text);
  let newText = Text.toLowerCase();
  setText(newText);
}


const handlerTextReversed = () =>{
  let newText = Text.split("").reverse("").join("");
  setText(newText);
}

const handlerCapitalizedText = () =>{
  let newText = Text.charAt(0).toUpperCase() + Text.slice(1).toLowerCase();
  setText(newText);
}


const handlertitleCase = () =>{
  let newText = Text.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
  setText(newText);
}

const handleCopyText = () =>{
  var Text = document.getElementById('myBox');
  Text.select();
  navigator.clipboard.writeText(Text.value);
}


const handleRemoveExtraSpace = () =>{
  let newText = Text.split(/[ ]+/);
  setText(newText.join(" "))
}


const handlerClearText = () =>{
  let newText = '';
  setText(newText);
}



const handleronchange = (event) =>{
    // console.log('on Changed');
    setText(event.target.value);
}

const [Text, setText] = useState('Enter Text Here'); //declare stateHooks

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>

<h2>{props.heading}</h2>

<div className="mb-3">
  <textarea className="form-control" onChange={handleronchange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} value={Text} id="myBox" rows="6"></textarea>
</div>

<button className='btn btn-primary mx-2' onClick={handlerUpperchange}>UpperCase</button>
<button className='btn btn-primary mx-2' onClick={handlerLowchange}>LowerCase</button>
<button className='btn btn-primary mx-2' onClick={handlerTextReversed}>Reveresed Case</button>
<button className='btn btn-primary mx-2' onClick={handlerCapitalizedText}>Capitalized Case</button>
<button className='btn btn-primary mx-2' onClick={handlertitleCase}>Sentence Case</button>
<button className='btn btn-primary mx-2' onClick={handleRemoveExtraSpace}>RemoveExtra Space</button>
<button className='btn btn-primary mx-2' onClick={handleCopyText}>CopyText</button>
<button className='btn btn-primary mx-2' onClick={handlerClearText}>Clear</button>

</div>

<div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
  <h2>Your Text Summary</h2>
  <p>{Text.split(" ").length} words and {Text.length} characters</p>
  <p>{0.008 * Text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{Text}</p>
</div>
    </>
  )
}






//ProTypes to use For safety and default text
TextForm.propTypes = {
    heading: PropTypes.string.isRequired
  }

  TextForm.defaultProps = {
    heading : 'Write Heading From Default prototypes'
  };