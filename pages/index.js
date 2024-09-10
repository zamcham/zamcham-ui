import Toggle from '../components/toggle/Toggle'

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Toggle Component Test</h1>
      <Toggle label="Toggle me" />
    </div>
  )
}