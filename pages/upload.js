import React, { useRef, useState, useEffect } from 'react'

// It's not clear to me how to trigger updates to the UI
const useForceUpdate = () => useState()[1]

export default () => {
  const fileInput = useRef(null)
  const forceUpdate = useForceUpdate()

  useEffect(e => {
    window.addEventListener('keyup', clickFileInput)
    return () => window.removeEventListener('keyup', clickFileInput)
  })

  function clickFileInput(e) {
    if (fileInput.current.nextSibling.contains(document.activeElement)) {
      // Bind space to trigger clicking of the button when focused
      if (e.keyCode === 32) {
        fileInput.current.click()
      }
    }
  }

  function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(fileInput.current.files)
    if (fileInput && fileInput.files.length > 0) {
      fetch('http://localhost:3000/api/upload', {
        method: 'POST',
        body: formData
      })
        .then(r => r.json())
        .then(data => {
          console.log(data)
        })
    }
  }

  function fileNames() {
    const { current } = fileInput

    if (current && current.files.length > 0) {
      let messages = []
      for (let file of current.files) {
        messages = messages.concat(<p key={file.name}>{file.name}</p>)
      }
      return messages
    }
    return null
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          id="file"
          type="file"
          ref={fileInput}
          // The onChange should trigger updates whenever
          // the value changes?
          // Try to select a file, then try selecting another one.
          onChange={forceUpdate}
          multiple
        />
        <label htmlFor="file">
          <span tabIndex="0" role="button" aria-controls="filename">
            Upload file(s):{' '}
          </span>
        </label>
        {fileNames()}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
