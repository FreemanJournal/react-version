import React, { Fragment, Component } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ReactPlayer from 'react-player'
import { PlayIcon } from '@heroicons/react/solid'

export default class VideoCard extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      video: '',
    }
  }
  modalClose = () => this.setState({ show: false })
  modalOpen = (a) => this.setState({ show: true, video: a })

  render() {
    const { id, video_links, video_titles } = this.props.data
    console.log('This is a hit.')
    // onClick={this.modalOpen.bind(this,video)}
    return (
      <>
        <div className="bg-white w-auto m-3 sm:p-2 sm:h-auto rounded-2xl shadow-lg flex flex-col sm:flex-col select-none">
          <div className="sm:h-full p-5 rounded-xl bg-gray-200 flex flex-wrap items-center justify-center">
            <div className="items-center justify-center">
              <div className="h-72 flex justify-center items-center">
                <div className="flex">
                  <button
                    type="button"
                    className="w-24 h-24 px-4 py-2 text-sm font-medium text-white rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 items-center justify-center"
                    onClick={this.modalOpen.bind(this, video_links)}
                  >
                    <PlayIcon
                      id="play-btn"
                      className="h-15 w-15 text-blue-500"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <h3 className="h3 text-gray-700 font-semibold">{video_titles}</h3>
          </div>
          <div className="modals">
            <Transition appear show={this.state.show} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={this.modalClose}
              >
                <div className="min-h-screen px-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0" />
                  </Transition.Child>

                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        People who know us
                      </Dialog.Title>
                      <div className="mt-2 mx-auto">
                        {/* // Render a YouTube video player */}
                        {/* <ReactPlayer url='https://youtu.be/PV9zOok83oo-1' className='w-full' /> */}
                        <ReactPlayer
                          url={this.state.video}
                          className="w-full"
                          controls
                        />
                      </div>

                      <div className="mt-4 text-right">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                          onClick={this.modalClose}
                        >
                          Got it, thanks!
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </>
    )
  }
}
