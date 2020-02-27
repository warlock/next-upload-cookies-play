import React from 'react'
import fetch from 'isomorphic-unfetch'

const Godata = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>
}

Godata.getInitialProps = async ctx => {
  const res = await fetch('http://localhost:3000/api/quote')
  const json = await res.json()
  return { data: json }
}

export default Godata
