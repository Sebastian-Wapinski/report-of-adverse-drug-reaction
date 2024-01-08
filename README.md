![screen of app](/assets/img/formMainPage.png)

# Friendly Animals Blog

The purpose of the application is to showcase a functional form created using the design trend known as neumorphism.

**Main features**:

- Usage of context to menage state
- Utilizing Styled Components to dynamically update the progress bar upon the successful insertion of data
- Immediate validation when user starts typing
- Working on mobile devices and computers

&nbsp;

## ⚙️ Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

&nbsp;

## ✈️ Application Tour

### Desktop version

- Medic Data:

![](/assets/gif/formPage1.gif)

- Patient Data:

![](/assets/gif/formPage2.gif)

- Side Effects and Classification:

![](/assets/gif/formPage3and4.gif)

- Medicines:

![](/assets/gif/formPage5.gif)

### Mobile version

![](/assets/gif/formMobile.gif)

&nbsp;

## 💿 Installation

1. Clone the repository:

```
git clone [repository_url]
```

2. Navigate to the project directory:

```
cd [YOUR-REPO-NAME]
```

3. The project uses [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). Having them installed, type into the terminal:

```
npm i
```

4. To start application, type into the terminal:

```
npm start
```

&nbsp;

## 💡 Solutions Provided In The Project

- Creating state in a dynamic way:

```
const createInitState = (data, object) => {
  data.forEach((formData) => {
    object[formData[1].pageName] = []

    formData.forEach((item) => {
      if (item.type !== 'checkboxClassification') {
        object[item.pageName][item.name] = (
          item.type === 'range'
            ? 0 :
            item.type === 'text'
              ? '' :
              item.type === 'radio' || item.type === 'toggle' ? false : ''
        )
      }

      if (item.type !== 'toggle' && item.type !== 'checkboxClassification') {
        object[item.pageName][`${item.name}IsValid`] = false
      }

      if (item.type === 'checkboxClassification') {
        item.checkboxBtn.forEach(checkboxItem => {
          object[item.pageName][checkboxItem.checkboxName] = false
        })
      }
    })
  })
}

const init = { dispatch: errorMsg }

const allFormsData = [formMedicData, formPatientData, formSideEffectsData, formClassificationData, formMedicinesData]

createInitState(allFormsData, init)

export const FormContext = React.createContext(init)
```

- One elastic validation for every component:

```
export const validateForm = (formInputs, setValueForIsValid, formFieldData) => {
  const {
    ...
  } = formInputs

  const {
    ...
  } = formFieldData

  let listElemArr
  if (list) {
    listElemArr = createList(list)
  }

  if (
    checkMinAmountOfCharacters(minAmountOfCharacters, value.length ? value.length : 0)
          &&
          checkAmountOfCharacters(amountOfCharacters, value.length ? value.length : 0)
          &&
          testRegExp(regExp, value)
          &&
          checkMinToValidate(minToValidate, value)
          &&
          checkMaxToValidate(maxToValidate, value)
          &&
          checkIsListIncludesText(listElemArr, innerText)
          &&
          checkIsNotExceededCurrentDay(currentDay, value, currentYear, currentMonth, currentDay)
  ) {
    setValueForIsValid({ pageName, name: [name + 'IsValid'], value: true })
  } else {
    setValueForIsValid({ pageName, name: [name + 'IsValid'], value: false })
  }
}
```

- Form data divided into smaller files

- Styles changing depends on variable:

```
const ProgressPercentageBar = styled.div`
height: 100%;
width: 0;
border: none;
border-radius: 50px;
background: ${props => props.theme.secondaryBackground};
box-shadow: inset 17px 17px 34px #8bb5a3, inset -17px -17px 34px #fdffff;
transition: 0.4s ease-in-out;
${
  props => props.$widthPercentage && css`
  width: ${props.$widthPercentage + '%'};
  `
}
`
```

- One component deciding which type of input should be used:

```
export const checkTypeData = [
  {
    checkType: 'text',
    useField: <FieldText key={uuid()}/>
  },
  ...
  {
    checkType: 'checkbox',
    useField: <FieldCheckbox key={uuid()} />
  },
  {
    checkType: 'list',
    useField: <FieldList key={uuid()}/>
  },
  {
    checkType: 'checkboxClassification',
    useField: <FieldCheckboxClassification key={uuid()}/>
  }
]
```

```
export const FormField = (props) => {
  const {
    fieldData
  } = props

  const {
    type = 'text'
  } = fieldData

  const { fieldData: contextFieldData, setFieldData } = React.useContext(RenderingFieldContext)

  React.useEffect(() => {
    setFieldData(() => fieldData)
  }, [fieldData, setFieldData])

  return (
    <StyledFormField>
      {
        Object.keys(contextFieldData).length !== 0 ?
          checkTypeData.map(arrayPosition => {
            const { checkType, useField } = arrayPosition

            return (
              checkType === type ?
                useField
                :
                null
            )
          })
          :
          null
      }
    </StyledFormField>
  )
}
```

&nbsp;

## 🙋‍♂️ Feel free to contact me

Thank you for investing your time. I hope you enjoyed exploring my project and have a pleasant experience testing it. For any inquiries, feel free to reach out to me via email at sebastian.pawel.wapinski@gmail.com.

&nbsp;

## 👏 Thanks

I am truly grateful for the guidance and support provided by my mentors. A heartfelt thank you to each of them for their invaluable contributions.

#### [Akademia Samouka](https://akademiasamouka.pl/) - Mateusz Bogolubow i Mateusz Choma

#### Mateusz Choma - [coderoad](https://coderoad.pl/)

#### Mateusz Bogolubow - [devmentor](https://devmentor.pl/)
