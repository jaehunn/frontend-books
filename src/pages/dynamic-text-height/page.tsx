import { useState } from 'react'

import Form from '~/components/form'
import InputText from '~/components/input-text'
import Label from '~/components/label'

export default function DynamicTextHeightPage() {
  const [description, setDescription] = useState('')

  /** 이모지를 한 글자로 카운트하기 */
  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (graphemeSegmenter.getSegmentLength(e.target.value) > 10) {
      alert('10자 이하로 입력해주세요.')

      return
    }

    setDescription(e.target.value)
  }

  return (
    <div>
      <Form>
        <Label htmlFor="description">Description: </Label>
        <InputText id="description" value={description} onChange={handleChangeDescription} />
      </Form>
    </div>
  )
}
