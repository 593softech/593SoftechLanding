"use client";
import React from "react";
import BlogEmploye from "../../components/BlogEmploye";
import { formatDate } from "@/utils/functions";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { API_URL_IMG } from "@/config/config";
import { Employe } from "@/services/model/Employe";

interface EmployePageProps {
  employe: Employe
}

const EmployePage: React.FC<EmployePageProps> = ({ employe }) => {
  return (
    <div className="w-full grid">
      <div className="justify-center flex-1 max-w-6xl mx-auto md:px-6 lg:pt-10 pt-6 w-full">
        <div className="flex flex-wrap">
          <div className="relative w-full px-4 mb-10 md:w-1/2 lg:mb-0 z-10">
            <div className="relative">
              <div className="flex items-center justify-center">
                <PhotoProvider
                  maskClassName="bg-bunker-600 backdrop-blur-md lg:backdrop-blur-md transition-colors transition-opacity duration-100"
                  bannerVisible={false}
                  maskOpacity={-1}
                >
                  <PhotoView src={`${API_URL_IMG}Employe/${employe.photo}`}>
                    <img
                      src={`${API_URL_IMG}Employe/${employe.photo}`}
                      alt={employe.fullName}
                      className="relative z-40 object-cover rounded-3xl h-60 w-60 lg:h-96 lg:w-96 bg-primary-100 border border-bunker-800"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-5 md:w-1/2 lg:mb-0">
            <div className="flex lg:justify-between w-full justify-center items-center mx-auto">
              <div className="flex lg:justify-start justify-center w-full">
                <div className="grid">
                  <h2 className="lg:mx-0 mx-auto lg:text-left text-center pb-2 text-xl font-bold leading-5 text-bunker-400 md:text-4xl uppercase">
                    {employe.fullName}
                  </h2>
                  <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded lg:mx-0 mx-auto">
                    <div className="flex-1 h-2 bg-[#FBBC05]"></div>
                    <div className="flex-1 h-2 bg-[#4285F4]"></div>
                    <div className="flex-1 h-2 bg-[#EA4335]"></div>
                  </div>
                </div>
              </div>
            </div>
            <ul>
              <li className="flex mb-4 text-base text-black-800 leading-3">
                <span className="mr-3 text-primary-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg>
                </span>
                <div className="grid -mt-1">
                  <span className="text-black-200 text-lg font-semibold">
                    Se unió el:
                  </span>
                  <h3 className="text-black-300">{formatDate(employe.created)}</h3>
                </div>
              </li>
              <li className="flex text-base text-black-800 leading-3">
                <span className="mr-3 text-primary-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg>
                </span>
                <div className="grid -mt-1">
                  <span className="text-black-200 text-lg font-semibold">
                    Descripción:
                  </span>
                  <h3 className="text-black-300 leading-5">{employe.description}</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <BlogEmploye id={employe.idEmploye} />
    </div>
  );
};

export default EmployePage;
