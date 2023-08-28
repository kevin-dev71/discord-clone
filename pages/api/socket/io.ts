import type { NextApiRequest } from "next"
import type { Server as NetServer } from "http"
import { Server as ServerIO } from "socket.io"

import type { NextApiResponseServerIo } from "@/types"

export const config = {
  api: {
    bodyParser: false,
  },
}

const ioHandler = (req: NextApiRequest, res: NextApiResponseServerIo) => {
  if (!res.socket.server.io) {
    const path = "/api/socket/io"
    const httpServer: NetServer = res.socket.server as any
    const io = new ServerIO(httpServer, {
      path,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      addTrailingSlash: false,
    })
    res.socket.server.io = io
  }

  res.end()
}

export default ioHandler
