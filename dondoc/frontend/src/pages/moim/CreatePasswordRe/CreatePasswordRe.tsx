import React, { useCallback, useEffect } from "react"
import styles from "./CreatePasswordRe.module.css"
import { useNavigate, useLocation } from "react-router-dom"
import { BackLogoHeader } from "../../toolBox/BackLogoHeader/BackLogoHeader"

function CreatePasswordRe () {
  const [nums, setNums] = React.useState<number[]>([])
  const [password, setPassword] = React.useState<string>("")
  const [pwd1, setPwd1] = React.useState<boolean>(false)
  const [pwd2, setPwd2] = React.useState<boolean>(false)
  const [pwd3, setPwd3] = React.useState<boolean>(false)
  const [pwd4, setPwd4] = React.useState<boolean>(false)
  const [errorCount, setErrorCount] = React.useState<number>(1)

  const navigate = useNavigate()
  const { state } = useLocation()
  const moimName = state.moimName
  const moimInfo = state.moimInfo
  const account = state.account
  const category = state.category

  const PASSWORD_MAX_LENGTH = 4 // 비밀번호 입력길이 제한 설정

  useEffect(() => {
    const nums_random = Array.from({ length: 10 }, (v, k) => k) // 이 배열을 변경해 입력문자 변경 가능
    setNums(shuffle(nums_random))
  },[])

  useEffect(() => {
    if (password.length === 0) {
      setPwd1(false)
      setPwd2(false)
      setPwd3(false)
      setPwd4(false)
    }
    else if (password.length === 1) {
      setPwd1(true)
      setPwd2(false)
      setPwd3(false)
      setPwd4(false)
    }
    else if (password.length === 2) {
      setPwd2(true)
      setPwd3(false)
      setPwd4(false)
    }
    else if (password.length === 3) {
      setPwd3(true)
      setPwd4(false)
    }
    else if (password.length === 4) {
      setPwd4(true)
      if (state.password !== password) {
        if (errorCount === 5) {
          alert('5회 오류 비밀번호를 다시 설정해주세요!')
          navigate(-1)
        } else {
          setErrorCount(errorCount + 1)
          alert(`${errorCount}회 오류!`)
          setPassword("")
        }
      } else {
        navigate('/createresult', {state:{password:password, moimName:moimName, moimInfo:moimInfo, account:account, category:category}})
        alert('비밀번호가 설정되었습니다!')
      }
    }
  },[password])

  const shuffle = (nums: number[]) => {
    // 배열 섞는 함수
    let num_length = nums.length
    while (num_length) {
      const random_index = Math.floor(num_length-- * Math.random())
      const temp = nums[random_index]
      nums[random_index] = nums[num_length]
      nums[num_length] = temp
    }
    return nums
  }

  const handlePasswordChange = useCallback(
    (num: number) => {
      if (password.length === PASSWORD_MAX_LENGTH) {
        return
      }
      setPassword(password + num.toString())
    },
    [password],
  )

  const erasePasswordOne = useCallback(
    () => {
      setPassword(password.slice(0, password.length === 0 ? 0 : password.length - 1))
    },
    [password],
  )

  const shuffleNums = useCallback(
    (num: number) => () => {
      handlePasswordChange(num)
    },
    [handlePasswordChange],
  )



  return (

    <div className={styles.container}>
      <div className={styles.content}>

        <BackLogoHeader name="비밀번호 확인"fontSize="2rem" left="5rem" top="0.8rem"/>

        <div className={styles.inputment}>
          <h1>비밀번호를 다시 입력해주세요</h1>
        </div>

        <div className={styles.PwdContainer}>

          <div className={styles.pwd}>
              <div className={styles.pwdbox}>{pwd1 ? '*':null}</div>
              <div className={styles.pwdbox}>{pwd2 ? '*':null}</div>
              <div className={styles.pwdbox}>{pwd3 ? '*':null}</div>
              <div className={styles.pwdbox}>{pwd4 ? '*':null}</div>
          </div>

          <div className={styles.inputter__flex}>
            {nums.map((n, i) => {
              const Basic_button = (
                <button
                  className={`${styles.num_button__flex} ${styles.spread_effect} ${styles.fantasy_font__2_3rem}`}
                  value={n}
                  onClick={shuffleNums(n)}
                  key={i}
                >
                  {n}
                </button>
              )
              return i == nums.length - 1 ? (
                <>
                  <button
                    className={`${styles.num_button__flex} ${styles.spread_effect} ${styles.fantasy_font__2_3rem}`}
                  ></button>
                  {Basic_button}
                </>
              ) : (
                Basic_button
              )
            })}
            <button
              className={`${styles.num_button__flex} ${styles.spread_effect} ${styles.fantasy_font__2_3rem}`}
              onClick={erasePasswordOne}
            >
              ←
            </button>
          </div>

        </div>
      </div>
    </div>

  )
}

export default CreatePasswordRe