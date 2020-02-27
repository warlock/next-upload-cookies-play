import { Cookie, withCookie } from 'next-cookie'
import React, { useState } from 'react'

const Index = ({ cookie, displayName }) => {
  const [ name, setName ] = useState('')

  if (displayName)
    return (
      <div>
        <p>Display name: {JSON.stringify(displayName)}</p>
      </div>
    )
  return (
    <div>
      <input type="text" name="name" onChange={e => setName({ name: e.target.value })} />
      <button
        onClick={() => {
          cookie.set('name', name)
        }}
      >
        Store name to cookie
      </button>
    </div>
  )
}

Index.getInitialProps = ctx => {
  const name = ctx.cookie.get('name')
  let displayName = null
  if (name) {
    displayName = name
  }
  return { displayName }
}

export default withCookie(Index)
