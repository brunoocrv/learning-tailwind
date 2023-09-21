import { Bold, Italic, Link, ListOrdered, Mail } from 'lucide-react'

import { SettingsTabs } from '@/components/SettingsTabs'
import {
  TextfieldControl,
  TextfieldPrefix,
  TextfieldRoot,
} from '@/components/Form/Textfield'
import {
  FileControl,
  FileList,
  FilePreview,
  FileRoot,
  FileTrigger,
} from '@/components/Form/File'
import { SelectItem, SelectRoot } from '@/components/Form/Select'
import { TextArea } from '@/components/Form/TextArea'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Upgrade your photo and personal details here
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              className="shaow-sm rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700"
              type="submit"
              form="settings"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <TextfieldRoot>
                <TextfieldControl id="firstName" defaultValue="Bruno" />
              </TextfieldRoot>
              <TextfieldRoot>
                <TextfieldControl defaultValue="Carvalho" />
              </TextfieldRoot>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <TextfieldRoot>
              <TextfieldPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </TextfieldPrefix>
              <TextfieldControl
                id="email"
                defaultValue="brn.carvalho@icloud.com"
                type="email"
              />
            </TextfieldRoot>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <FileRoot className="flex items-start gap-5">
              <FilePreview />
              <FileTrigger />
              <FileControl />
            </FileRoot>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <TextfieldRoot>
              <TextfieldControl id="role" defaultValue="Frontend Developer" />
            </TextfieldRoot>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <SelectRoot placeholder="Select a country...">
              <SelectItem value="brazil" text="Brazil" />
              <SelectItem value="us" text="United States" />
              <SelectItem value="england" text="England" />
              <SelectItem value="italy" text="Italy" />
            </SelectRoot>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <SelectRoot placeholder="Select a timezone...">
              <SelectItem
                value="pacificStandardTime"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem
                value="americaSaoPaulo"
                text="America / São Paulo (UTC-03:00)"
              />
            </SelectRoot>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <SelectRoot defaultValue="normal">
                  <SelectItem
                    value="normalText"
                    defaultChecked
                    text="Normal text"
                  />
                </SelectRoot>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
                <TextArea
                  defaultValue="I'm the best frontend developer, hire me!!"
                  id="bio"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileRoot>
              <FileTrigger />
              <FileList />
              <FileControl multiple />
            </FileRoot>
            <div />
          </div>

          <div className="flex-items flex justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              className="shaow-sm rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
