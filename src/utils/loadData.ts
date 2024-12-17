import Papa from 'papaparse'

export const loadCSVData = async (filePath: string): Promise<any[]> => {
  const response = await fetch(filePath)
  const csvText = await response.text()
  
  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      complete: (results) => resolve(results.data),
      error: (error) => reject(error),
    })
  })
}
