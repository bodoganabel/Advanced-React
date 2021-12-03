import RequestReset from 'components/RequestReset'
import Reset from 'components/Reset'
import React from 'react'
import Router, { useRouter } from 'next/router';

export default function ResetPage({ query }) {
  const urlParams = useRouter().query;
  const token = urlParams.token.toString();
  if (!token) {
    return <p>
      You must supply a token
      <RequestReset token={token}></RequestReset>
    </p>
  }

  return (
    <div>
      <p>RESET YOUR PASSWORD {token}</p>
      <Reset token={token} />
    </div>
  )
}
