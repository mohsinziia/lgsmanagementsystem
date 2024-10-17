import React from "react";

const NotificationSettings = () => {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Notifications</h3>
          <p className="text-sm text-muted-foreground">
            Configure how you receive notifications.
          </p>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full"
        ></div>
        <form className="space-y-8">
          <div className="space-y-3">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor=":rbc:-form-item"
            >
              Notify me about...
            </label>
            <div
              role="radiogroup"
              aria-required="false"
              dir="ltr"
              className="gap-2 flex flex-col space-y-1"
              id=":rbc:-form-item"
              aria-describedby=":rbc:-form-item-description"
              aria-invalid="false"
              tabIndex={0}
              style={{ outline: "none" }}
            >
              <div className="flex items-center space-x-3 space-y-0">
                <button
                  type="button"
                  role="radio"
                  aria-checked="false"
                  data-state="unchecked"
                  value="all"
                  className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id=":rbd:-form-item"
                  aria-describedby=":rbd:-form-item-description"
                  tabIndex={-1}
                  data-radix-collection-item=""
                ></button>
                <input
                  aria-hidden="true"
                  tabIndex={-1}
                  type="radio"
                  value="all"
                  style={{
                    transform: "translateX(-100%)",
                    position: "absolute",
                    pointerEvents: "none",
                    opacity: "0",
                    margin: "0px",
                    width: "16px",
                    height: "16px",
                  }}
                />
                <label
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                  htmlFor=":rbd:-form-item"
                >
                  All new messages
                </label>
              </div>
              <div className="flex items-center space-x-3 space-y-0">
                <button
                  type="button"
                  role="radio"
                  aria-checked="false"
                  data-state="unchecked"
                  value="mentions"
                  className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id=":rbf:-form-item"
                  aria-describedby=":rbf:-form-item-description"
                  tabIndex={-1}
                  data-radix-collection-item=""
                ></button>
                <input
                  aria-hidden="true"
                  tabIndex={-1}
                  type="radio"
                  value="mentions"
                  style={{
                    transform: "translateX(-100%)",
                    position: "absolute",
                    pointerEvents: "none",
                    opacity: "0",
                    margin: "0px",
                    width: "16px",
                    height: "16px",
                  }}
                />
                <label
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                  htmlFor=":rbf:-form-item"
                >
                  Direct messages and mentions
                </label>
              </div>
              <div className="flex items-center space-x-3 space-y-0">
                <button
                  type="button"
                  role="radio"
                  aria-checked="false"
                  data-state="unchecked"
                  value="none"
                  className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id=":rbh:-form-item"
                  aria-describedby=":rbh:-form-item-description"
                  tabIndex={-1}
                  data-radix-collection-item=""
                ></button>
                <input
                  aria-hidden="true"
                  tabIndex={-1}
                  type="radio"
                  value="none"
                  style={{
                    transform: "translateX(-100%)",
                    position: "absolute",
                    pointerEvents: "none",
                    opacity: "0",
                    margin: "0px",
                    width: "16px",
                    height: "16px",
                  }}
                />
                <label
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                  htmlFor=":rbh:-form-item"
                >
                  Nothing
                </label>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
            <div className="space-y-4">
              <div className="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  S
                  <label
                    className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
                    htmlFor=":rbj:-form-item"
                  >
                    Communication emails
                  </label>
                  <p
                    id=":rbj:-form-item-description"
                    className="text-[0.8rem] text-muted-foreground"
                  >
                    Receive emails about your account activity.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked="false"
                  data-state="unchecked"
                  value="on"
                  className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                  id=":rbj:-form-item"
                  aria-describedby=":rbj:-form-item-description"
                  aria-invalid="false"
                >
                  <span
                    data-state="unchecked"
                    className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
                  ></span>
                </button>
                <input
                  aria-hidden="true"
                  tabIndex={-1}
                  type="checkbox"
                  value="on"
                  style={{
                    transform: "translateX(-100%)",
                    position: "absolute",
                    pointerEvents: "none",
                    opacity: 0,
                    margin: "0px",
                    width: "36px",
                    height: "20px",
                  }}
                />
              </div>
              <div className="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <label
                    className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
                    htmlFor=":rbk:-form-item"
                  >
                    Marketing emails
                  </label>
                  <p
                    id=":rbk:-form-item-description"
                    className="text-[0.8rem] text-muted-foreground"
                  >
                    Receive emails about new products, features, and more.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked="false"
                  data-state="unchecked"
                  value="on"
                  className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                  id=":rbk:-form-item"
                  aria-describedby=":rbk:-form-item-description"
                  aria-invalid="false"
                >
                  <span
                    data-state="unchecked"
                    className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
                  ></span>
                </button>
                <input
                  aria-hidden="true"
                  tabIndex={-1}
                  type="checkbox"
                  value="on"
                  style={{
                    transform: "translateX(-100%)",
                    position: "absolute",
                    pointerEvents: "none",
                    opacity: 0,
                    margin: "0px",
                    width: "36px",
                    height: "20px",
                  }}
                />
              </div>
              <div className="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <label
                    className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
                    htmlFor=":rbl:-form-item"
                  >
                    Social emails
                  </label>
                  <p
                    id=":rbl:-form-item-description"
                    className="text-[0.8rem] text-muted-foreground"
                  >
                    Receive emails for friend requests, follows, and more.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  data-state="checked"
                  value="on"
                  className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                  id=":rbl:-form-item"
                  aria-describedby=":rbl:-form-item-description"
                  aria-invalid="false"
                >
                  <span
                    data-state="checked"
                    className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
                  ></span>
                </button>
                <input
                  aria-hidden="true"
                  tabIndex={-1}
                  type="checkbox"
                  value="on"
                  checked={false}
                  style={{
                    transform: "translateX(-100%)",
                    position: "absolute",
                    pointerEvents: "none",
                    opacity: 0,
                    margin: "0px",
                    width: "36px",
                    height: "20px",
                  }}
                />
              </div>
              <div className="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <label
                    className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
                    htmlFor=":rbm:-form-item"
                  >
                    Security emails
                  </label>
                  <p
                    id=":rbm:-form-item-description"
                    className="text-[0.8rem] text-muted-foreground"
                  >
                    Receive emails about your account activity and security.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  data-state="checked"
                  data-disabled=""
                  disabled={false}
                  value="on"
                  className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                  aria-readonly="true"
                  id=":rbm:-form-item"
                  aria-describedby=":rbm:-form-item-description"
                  aria-invalid="false"
                >
                  <span
                    data-state="checked"
                    data-disabled=""
                    className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
                  ></span>
                </button>
                <input
                  aria-hidden="true"
                  disabled={false}
                  tabIndex={-1}
                  type="checkbox"
                  value="on"
                  checked={false}
                  style={{
                    transform: "translateX(-100%)",
                    position: "absolute",
                    pointerEvents: "none",
                    opacity: 0,
                    margin: "0px",
                    width: "36px",
                    height: "20px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start space-x-3 space-y-0">
            <button
              type="button"
              role="checkbox"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              id=":rbn:-form-item"
              aria-describedby=":rbn:-form-item-description"
              aria-invalid="false"
            ></button>
            <input
              aria-hidden="true"
              tabIndex={-1}
              type="checkbox"
              value="on"
              style={{
                transform: "translateX(-100%)",
                position: "absolute",
                pointerEvents: "none",
                opacity: "0",
                margin: "0px",
                width: "16px",
                height: "16px",
              }}
            />
            <div className="space-y-1 leading-none">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor=":rbn:-form-item"
              >
                Use different settings for my mobile devices
              </label>
              <p
                id=":rbn:-form-item-description"
                className="text-[0.8rem] text-muted-foreground"
              >
                You can manage your mobile notifications in the{" "}
                <a href="/examples/forms">mobile settings</a> page.
              </p>
            </div>
          </div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            type="submit"
          >
            Update notifications
          </button>
        </form>
      </div>
    </div>
  );
};

export default NotificationSettings;
