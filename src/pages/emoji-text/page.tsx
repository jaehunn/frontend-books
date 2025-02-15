import { useState } from 'react'

import Form from '~/components/form'
import InputText from '~/components/input-text'
import Label from '~/components/label'
import graphemeSegmenter from './utils/grapheme-cluster'

export default function EmojiTextPage() {
  const [description, setDescription] = useState('')

  /** 이모지를 한 글자로 카운트하기 */
  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  return (
    <div>
      <Form>
        <Label htmlFor="description">Description: </Label>
        <InputText id="description" value={description} onChange={handleChangeDescription} />
      </Form>

      <div>
        {/* <p>Emoji Count: {description.length}</p> */}
        {/* <p>
          Emoji Code Units:{' '}
          {getCodeUnits(description)
            .map((codeUnit) => getHexaCode(codeUnit))
            .join(', ')}
        </p> */}
        <p>Emoji Count: {graphemeSegmenter.getSegmentLength(description)}</p>
      </div>
    </div>
  )
}
