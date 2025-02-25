class GraphemeSegmenter {
  private segmenter: Intl.Segmenter

  constructor() {
    this.segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' })
  }

  public getSegments(str: string) {
    return [...this.segmenter.segment(str)]
  }

  public getSegmentLength(str: string) {
    return this.getSegments(str).length
  }
}

const graphemeSegmenter = new GraphemeSegmenter()

export default graphemeSegmenter

// const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' })
// console.log([...segmenter.segment('hi 😌')])
/**
 * { index: 0, input: 'hi 😌', segment: 'h' }
 * { index: 1, input: 'hi 😌', segment: 'i' }
 * { index: 2, input: 'hi 😌', segment: ' ' }
 * { index: 3, input: 'hi 😌', segment: '😌' }
 */
