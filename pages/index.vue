<template>
  <div class="wrapper xl:pt-36 min-h-screen xl:pb-8 flex">
    <div class="md:rounded-lg pb-10 flex-1 bg-white flex flex-col space-y-3">
      <div class="h-[100px] md:rounded-t-lg bg-center bg-cover bg-[url('/wallpapers/gradient.png')] w-full"></div>

      <div class="flex p-8 items-center justify-between flex-col md:flex-row md:space-y-0 space-y-6">
        <UserCard />

        <button
          :form="formId"
          type="submit"
          class="bg-blue-500 text-white px-8 py-2 rounded-lg">
          Save
        </button>
      </div>

      <form
        :id="formId"
        class="px-8 flex md:space-x-6 md:flex-row flex-col space-y-6 md:space-y-0"
        @submit.prevent="submit">
        <div class="md:w-1/2 flex-col space-y-6">
          <UiLabel
            v-slot="{ id }"
            title="Full Name">
            <input
              :id="id"
              v-model="fullName"
              name="fullname"
              :class="{ [errorStyles]: errors.fullName }"
              type="text"
              placeholder="Your Full Name" />

            <UiErrorMessage :message="errors.fullName" />
          </UiLabel>

          <UiLabel
            v-slot="{ id }"
            title="Gender">
            <select
              :id="id"
              v-model="gender"
              name="gender">
              <option
                v-for="genderOption of genderOptions"
                :key="genderOption.value"
                :value="genderOption.value">{{ genderOption.title }}</option>
            </select>
          </UiLabel>

          <UiLabel
            v-slot="{ id }"
            title="Language">
            <select
              :id="id"
              v-model="language"
              :class="{ [errorStyles]: errors.language }"
              name="language">
              <option
                v-for="languageOption of languageOptions"
                :key="languageOption.value"
                :value="languageOption.value">{{ languageOption.title }}</option>
            </select>
            <UiErrorMessage :message="errors.language" />
          </UiLabel>
        </div>

        <div class="md:w-1/2 flex-col space-y-6">
          <UiLabel
            v-slot="{ id }"
            title="Email">
            <input
              :id="id"
              v-model="email"
              name="email"
              type="text"
              :class="{ [errorStyles]: errors.email }"
              placeholder="Your Email" />
            <UiErrorMessage :message="errors.email" />
          </UiLabel>

          <UiLabel
            v-slot="{ id }"
            title="Country">
            <select
              :id="id"
              v-model="country"
              name="country">
              <option
                v-for="countryOption of countryOptions"
                :key="countryOption.value"
                :value="countryOption.value">{{ countryOption.title }}</option>
            </select>
          </UiLabel>

          <UiLabel
            v-slot="{ id }"
            title="Time Zone">
            <select
              :id="id"
              v-model="timezone"
              name="timezone">
              <option
                v-for="timezoneOption of timezoneOptions"
                :key="timezoneOption"
                :value="timezoneOption">{{ timezoneOption }}</option>
            </select>
          </UiLabel>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { FEMALE, MALE } from '@/constants/gender'
import { EN, KG, RU } from '@/constants/language'
import { setUser, user } from '@/stores/user'
import { toTypedSchema } from '@vee-validate/yup'
import { push } from 'notivue'
import * as S from 'yup'

const formId = useId()
const errorStyles = '!border-red-500 focus:!border-red-500 focus:ring-red-500'

const schema = toTypedSchema(S.object({
  fullName: S.string().min(1).required(),
  email: S.string().email().required(),
  language: S.mixed().oneOf([EN, KG, RU]).required(),
  gender: S.mixed().oneOf([MALE, FEMALE]).nullable(),
  country: S.string().nullable().optional(),
  timezone: S.string().nullable().optional()
}))

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
  initialValues: {
    fullName: user.value.fullName,
    email: user.value.email,
    language: user.value.language,
    country: user.value.country,
    timezone: user.value.timezone,
    gender: user.value.gender
  }
})

const [fullName] = defineField('fullName')
const [gender] = defineField('gender')
const [email] = defineField('email')
const [country] = defineField('country')
const [timezone] = defineField('timezone')
const [language] = defineField('language')

const submit = handleSubmit(values => {
  setUser({
    fullName: values.fullName,
    gender: values.gender,
    email: values.email,
    country: values.country,
    timezone: values.timezone,
    language: values.language
  })
  push.success('Success!')
})

const genderOptions = [
  {
    title: 'Male',
    value: MALE
  },
  {
    title: 'Female',
    value: FEMALE
  }
]

const languageOptions = [
  {
    title: 'EN',
    value: EN
  },
  {
    title: 'RU',
    value: RU
  },
  {
    title: 'KG',
    value: KG
  },
]

const countryOptions = [
  {
    title: 'Kyrgyzstan',
    value: KG,
  },
  {
    title: 'Russia',
    value: RU,
  },
  {
    title: 'England',
    value: EN,
  },
]

const timezoneOptions = [
  'Asia/Bishkek',
  'Europe/Moscow',
  '	Europe/London',
]
</script>