import React from 'react'

const InfoCard = ({iconName='disabled_by_default', cardTitle='Untitled Card', cardContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}) => {
    return (
        <div className="card shadow-sm bg-base-200 w-xs transition-all duration-300 ease-in-out hover:scale-[1.01] hover:-translate-y-1 hover:shadow-lg">
            <div className="card-body">
                <div className="flex mb-4">
                    <span className="material-symbols-outlined text-base-100 p-2 mr-4 bg-accent rounded select-none">{ iconName }</span>
                    <h2 className="card-title text-xl dark:text-base-content">{ cardTitle }</h2>
                </div>
                <p className="text-md">
                    { cardContent }
                </p>
            </div>
        </div>
    )
}

export default InfoCard