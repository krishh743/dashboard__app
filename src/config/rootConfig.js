import productionConfig from './productionConfig.json'
import developmentConfig from './developmentConfig.json'

export const myConfig = process.env.NODE_ENV === 'development' ? developmentConfig : productionConfig