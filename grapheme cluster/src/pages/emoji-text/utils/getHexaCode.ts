const getHexaCode = (unit: number) => {
  return `0x${unit.toString(16).toUpperCase()}`
}

export default getHexaCode
