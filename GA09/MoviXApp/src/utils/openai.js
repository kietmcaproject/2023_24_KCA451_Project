import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';


const openai = new OpenAI({
  apiKey: "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", 
  dangerouslyAllowBrowser: true,
})
export default openai;