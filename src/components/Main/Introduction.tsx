import React, { FC } from 'react'
import ProfileImage from 'components/Main/ProfileImage'
import TypingText from 'components/Commons/TypingText'

const Introduction: FC = function () {
  return (
    <header
      className="py-20"
      style={{
        backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
      }}
    >
      <div className="flex justify-between container mx-auto">
        <div>
          <ProfileImage />
          <div className="mt-10 text-white">
            <div>Nice to Meet You,</div>
            <div className="text-2xl">I'm Junior Frontend Developer </div>
            <TypingText />
          </div>
        </div>
        <div>
          <div>GIT-HUB</div>
          <div>PORTFOLIO</div>
        </div>
      </div>
    </header>
  )
}

export default Introduction
