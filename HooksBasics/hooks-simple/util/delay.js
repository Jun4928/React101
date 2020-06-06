export default async (ms) => {
  return await new Promise(resolve => setTimeout(resolve, ms)); 
}