export default function File({ owner }: { owner: boolean }) {
  return <div>{owner ? 'My Files' : 'Shared Files'}</div>
}

