export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <div className="grow container mx-auto py-4 flex flex-col justify-center items-center">
        <ul className="text-2xl flex flex-col space-y-4 list-disc">
          <li>
            <a href="https://www.tenmonth.cn" target="_blank">
              Home App
            </a>
          </li>
          <li>
            <a href="https://www.tenmonth.cn/snake" target="_blank">
              Snake App
            </a>
          </li>
          <li>
            <a href="https://www.tenmonth.cn/audio_player" target="_blank">
              Audio Player App
            </a>
          </li>
          <li>
            <a href="https://www.tenmonth.cn/docs" target="_blank">
              Docs App
            </a>
          </li>
          <li>
            <a href="https://www.tenmonth.cn/test" target="_blank">
              Test App
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
