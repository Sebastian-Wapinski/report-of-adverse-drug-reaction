import { v4 as uuid } from 'uuid'

export const formClassificationData = [
  {
    id: uuid(),
    name: 'sideEffectsSeverityType',
    label: 'CHECK SEVERITY OF SIDE EFFECTS:',
    checkboxBtn: [
      {
        checkboxId: 'isDecease',
        checkboxName: 'isDecease',
        checkboxLabel: 'DECEASE'
      },
      {
        checkboxId: 'isDangerToLife',
        checkboxName: 'isDangerToLife',
        checkboxLabel: 'DANGER TO LIFE  '
      },
      {
        checkboxId: 'isDisability',
        checkboxName: 'isDisability',
        checkboxLabel: 'DISABILITY'
      },
      {
        checkboxId: 'isFetalInjury',
        checkboxName: 'isFetalInjury',
        checkboxLabel: 'FETAL INJURY'
      },
      {
        checkboxId: 'isOther',
        checkboxName: 'isOther',
        checkboxLabel: 'OTHER MEDICALLY SIGNIFICANT'
      }
    ],
    isRequire: true,
    type: 'checkbox'
  },
  {
    id: uuid(),
    name: 'result',
    label: 'CHOOSE RESULT:',
    list: [
      {
        id: uuid(),
        resultType: 'REMISSION'
      },
      {
        id: uuid(),
        resultType: 'PERSISTANCE OF SYMPTOMS'
      },
      {
        id: uuid(),
        resultType: 'SYMPTOMS SUBSIDE'
      },
      {
        id: uuid(),
        resultType: 'RECOVERY WITH CONSEQUENCES'
      },
      {
        id: uuid(),
        resultType: 'DECEASED'
      },
      {
        id: uuid(),
        resultType: 'UNKNOWN'
      }
    ],
    isRequire: true,
    type: 'list'
  }
]
