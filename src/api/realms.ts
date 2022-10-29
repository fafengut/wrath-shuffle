import api from '@/api/api'

const REALM_ROOT = 'realm'

export default {
  getAllRealms: async (payload: object) => {
    return await api.get(`${REALM_ROOT}/index`, payload)
  },
}
