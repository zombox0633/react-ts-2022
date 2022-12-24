const sexType = {
    "man":"Man",
    "woman": "Woman"
}as const

type SexType = keyof typeof sexType
type SexTypeA = typeof sexType[keyof typeof sexType]

type sex = typeof sexType
type sexA = sex[keyof sex]



//array
const sexS = ['man','woman'] as const //
type sexL = typeof sexS[number]