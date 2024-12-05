import { screenPages } from '@/config/enums'

export interface CommonState {
  screen: screenPages
}

export const commonStoreDefaults: CommonState = {
  screen: screenPages.Main,
}

