import { Button } from 'antd'
import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className="p-4">
      Hello World. <br />
      <Link href="/deneme">
        <Button type="primary">/deneme</Button>
      </Link>
    </div>
  )
}
