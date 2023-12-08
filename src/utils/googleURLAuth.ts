export function googleURLAuth() {
  const URL = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000/auth?mode=google&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`
  return URL
}
