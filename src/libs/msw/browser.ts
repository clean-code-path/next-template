import { setupWorker } from 'msw/browser'

import handler from '@/libs/msw/handler'

export const worker = setupWorker(...handler)
