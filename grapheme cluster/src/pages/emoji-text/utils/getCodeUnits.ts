const getCodeUnits = (text: string) => {
  const codeUnits = []

  for (let i = 0; i < text.length; i++) {
    codeUnits.push(text.charCodeAt(i))
  }

  return codeUnits
}

export default getCodeUnits
